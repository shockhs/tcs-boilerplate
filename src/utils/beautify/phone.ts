import loadable from "@loadable/component";

const AwesomePhoneNumberLazy = loadable.lib(
  () =>
    import(/* webpackChunkName: "awesome-phonenumber" */ "awesome-phonenumber")
);

export const beautifyPhone = async (phoneNumberString: string) => {
  try {
    const { default: AwesomePhoneNumberInstance }: any =
      await AwesomePhoneNumberLazy.load();

    const { parsePhoneNumber } = AwesomePhoneNumberInstance;

    const rfcPhoneNumber =
      parsePhoneNumber(phoneNumberString).getNumber("rfc3966");

    if (!rfcPhoneNumber) return "";

    const [countryCode, regionCode, ..._phoneNumberArray] = rfcPhoneNumber
      .slice(4)
      .split("-");

    const isValid = _phoneNumberArray.length > 0;

    const phoneNumberCharacters = isValid
      ? _phoneNumberArray.join("").split("")
      : regionCode.split("");

    const phoneNumber = phoneNumberCharacters.reduce(
      (totalValue: number, currentValue: number, index: number) => {
        const result = totalValue + currentValue;
        let prefix = "";

        if (index === 2 || index === 4) prefix += " ";

        return result + prefix;
      },
      ""
    );

    return isValid
      ? `${countryCode} ${regionCode} ${phoneNumber}`
      : `${countryCode} ${phoneNumber}`;
  } catch (e) {
    console.log(e);
    return phoneNumberString;
  }
};

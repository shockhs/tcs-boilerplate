import { dialog } from "@/types/providers";
import { AnyFunction, Optional } from "@/types/utils";

export type IProps = {
  type: dialog.DialogType;
  onDismiss?: Optional<AnyFunction>;
  onConfirm?: Optional<AnyFunction>;
  errorData?: Optional<{
    title: string;
    description: string;
  }>;
};

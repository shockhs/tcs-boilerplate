/* eslint-disable no-multi-str */
(() => {
  let worker,
    fakeIdToCallback = {},
    lastFakeId = 0,
    maxFakeId = 0x7fffffff; // 2 ^ 31 - 1, 31 bit, positive values of signed 32 bit integer

  if (typeof Worker !== "undefined") {
    function getFakeId() {
      do {
        if (lastFakeId === maxFakeId) {
          lastFakeId = 0;
        } else {
          lastFakeId++;
        }
      } while (fakeIdToCallback.hasOwnProperty(lastFakeId));

      return lastFakeId;
    }
    try {
      worker = new Worker(
        new URL("@/services/hackTimer.worker", import.meta.url),
        { type: "module" }
      );
      window.setInterval = function (callback, time /* , parameters */) {
        let fakeId = getFakeId();

        fakeIdToCallback[fakeId] = {
          callback: callback,
          parameters: Array.prototype.slice.call(arguments, 2),
        };
        worker.postMessage({
          name: "setInterval",
          fakeId: fakeId,
          time: time,
        });

        return fakeId;
      };
      window.clearInterval = (fakeId) => {
        if (fakeIdToCallback.hasOwnProperty(fakeId)) {
          delete fakeIdToCallback[fakeId];
          worker.postMessage({
            name: "clearInterval",
            fakeId: fakeId,
          });
        }
      };
      window.setTimeout = function (callback, time /* , parameters */) {
        let fakeId = getFakeId();

        fakeIdToCallback[fakeId] = {
          callback: callback,
          parameters: Array.prototype.slice.call(arguments, 2),
          isTimeout: true,
        };
        worker.postMessage({
          name: "setTimeout",
          fakeId: fakeId,
          time: time,
        });

        return fakeId;
      };
      window.clearTimeout = (fakeId) => {
        if (fakeIdToCallback.hasOwnProperty(fakeId)) {
          delete fakeIdToCallback[fakeId];
          worker.postMessage({
            name: "clearTimeout",
            fakeId: fakeId,
          });
        }
      };
      worker.onmessage = (event) => {
        let data = event.data,
          fakeId = data.fakeId,
          request,
          parameters,
          callback;

        if (fakeIdToCallback.hasOwnProperty(fakeId)) {
          request = fakeIdToCallback[fakeId];
          callback = request.callback;
          parameters = request.parameters;
          if (request.hasOwnProperty("isTimeout") && request.isTimeout) {
            delete fakeIdToCallback[fakeId];
          }
        }
        if (typeof callback === "string") {
          try {
            // eslint-disable-next-line no-eval
            callback = eval(callback);
          } catch (error) {
            console.log(`Error parsing callback code string: `, error);
          }
        }
        if (typeof callback === "function") {
          callback.apply(window, parameters);
        }
      };
      worker.onerror = (event) => {
        console.log(event);
      };
    } catch (error) {
      console.log(`Initialization failed`);
      console.error(error);
    }
  } else {
    console.log(`Initialization failed - HTML5 Web Worker is not supported`);
  }
})();

import encrypt from "../../injectables/functions/core/encrypt"
import tryDecrypt from "../../injectables/functions/core/tryDecrypt"
import tryDecryptWithSecret from "../../injectables/functions/core/tryDecryptWithSecret"
import getJsonData from "../../injectables/functions/contentDelivery/getJsonData"
import getBlob from "../../injectables/functions/contentDelivery/getBlob"
import getSchemaIndex from "../../injectables/functions/contentDelivery/getSchemaIndex"
import setInboxEntry from "../../injectables/functions/contentDelivery/setInboxEntry"
import hiveData from "../../hummhive-data.json"

export default {
  hiveData: {
    hiveId: hiveData.hiveId,
    hiveName: hiveData.hiveName,
    hiveDescription: hiveData.hiveDescription,
    hiveJoinText: hiveData.hiveJoinText,
    theme: hiveData.theme,
    getAdminPublicKeys: () => hiveData.adminPublicKeys,
    configuredCells: hiveData.configuredCells,
    extensions: hiveData.extensions,
  },
  crypto: {
    encrypt,
    tryDecrypt,
    tryDecryptWithSecret,
  },
  contentDelivery: {
    getJsonData,
    getBlob,
    getSchemaIndex,
    setInboxEntry,
  },
}

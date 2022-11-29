import encrypt from "../../injectables/functions/core/encrypt"
import tryDecrypt from "../../injectables/functions/core/tryDecrypt"
import getJsonData from "../../injectables/functions/contentDelivery/getJsonData"
import getBlob from "../../injectables/functions/contentDelivery/getBlob"
import getSchemaIndex from "../../injectables/functions/contentDelivery/getSchemaIndex"
import setInboxEntry from "../../injectables/functions/contentDelivery/setInboxEntry"
import theme from "../../hummhive-theme.json"
import hiveData from "../../hummhive-data.json"

export default {
  theme,
  hiveData: {
    hiveId: hiveData.hiveId,
    getAdminPublicKeys: () => hiveData.adminPublicKeys,
    isNotifyCellInstalled: hiveData.isNotifyCellInstalled,
  },
  crypto: {
    encrypt,
    tryDecrypt,
  },
  contentDelivery: {
    getJsonData,
    getBlob,
    getSchemaIndex,
    setInboxEntry,
  },
}

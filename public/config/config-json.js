module.exports = function configJSON(req) {
  return {
    workflowApiVersion: '1.1',
    metaData: {
        icon: 'images/icon.png',
        iconSmall: 'images/iconSmall.png',
        category: 'message'
    },

    type: 'REST',
    lang: {
        en-US: {
            name: 'decentraland',
            description: 'To send message to decentraland'
        }
    },
    arguments: {
        execute: {
            inArguments: [{
                message: Hello, Metaverse
              }
            ],
            outArguments: [],
            url: 'https://decentraland-kn.herokuapp.com/execute',
            // The amount of time we want Journey Builder to wait before cancel the request. Default is 60000, Minimal is 1000
            timeout: 10000,
            // how many retrys if the request failed with 5xx error or network error. default is 0
            retryCount: 3,
            // wait in ms between retry.
            retryDelay: 1000,
            // The number of concurrent requests Journey Builder will send all together
            concurrentRequests: 5
        }
    },

    configurationArguments:{
        save:{
            url: 'https://decentraland-kn.herokuapp.com/save'
        },
        publish:{
            url: 'https://decentraland-kn.herokuapp.com/journeybuilder/publish'
        },
        stop:{
            url: 'https://decentraland-kn.herokuapp.com//stop'
        },
        validate:{
            url: 'applicationExtensionKey/journeybuilder/validate'
        }
    },
    userInterfaces:{
        configurationSupportsReadOnlyMode : true,
        configInspector: {
          size: 'scm-lg',
          emptyIframe: true
        }
    },
    schema: {
      arguments:{
        execute: {
          inArguments: [],
          outArguments: []
        }
      }
    }
  };
};

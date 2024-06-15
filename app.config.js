export default{
  "expo": {
    "name": "remoteWorker",
    "slug": "remoteWorker",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.zijja47.remoteworker",
      "googleServicesFile":process.env.GOOGLE_SERVICES_INFOPLIST
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "package": "com.zijja47.remoteworker",
      "googleServicesFile":process.env.GOOGLE_SERVICES_JSON
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      "eas": {
        "projectId": "6ef1447e-e926-4b9b-bdb4-1fd3fb6b4c9b"
      }
    }
  },
  "plugins": [
    "@react-native-google-signin/google-signin"
  ],
  "android": {
    "googleServicesFile": "./google-services.json"
  },
  "ios": {
    "googleServicesFile": "./GoogleService-Info.plist"
  }
}

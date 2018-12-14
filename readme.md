## iOS Universal Links

Minimal web-server to support iOS universal links. Seamlessly redirect the user to the app when a link to your website is tapped.

1. Create a static file called `apple-app-site-association` in the root of your HTTPS web server. **No extension!**

2. The content of the file describes the apps that can be opened via universal links and the paths that are supported.
```json
{
  "applinks": {
    "apps": [],
    "details": [
      {
        "appID": "{team_id}.{bundle_identifier}",
        "paths": [ "*" ]
      }
    ]
  }
}
```

The `team_id` can be found here https://developer.apple.com/account/#/membership. 
A minimal description is above. More info [here](https://developer.apple.com/library/archive/documentation/General/Conceptual/AppSearch/UniversalLinks.html).

3. The file needs to be accessible via HTTPS —without any redirects— at `https://<domain>/apple-app-site-association`. The `Content-Type` response header has to be `application/json`.

4. Apple App Site Association validation can be done [here](https://branch.io/resources/aasa-validator/#resultsbox).

5. More info [here](https://developer.apple.com/library/archive/documentation/General/Conceptual/AppSearch/UniversalLinks.html#//apple_ref/doc/uid/TP40016308-CH12-SW1).

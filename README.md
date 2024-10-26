26-Oct-2024

#### Note: This is an example extension and requires specific Okta configuration settings to work

This browser extension exposes profile data and improves navigation in the Okta Admin Console.

User Page<BR>
<img width="796" style="border: 2px solid blue;" alt="366265365-310ba705-a9c5-4f81-bfc4-ac4df9b81169" src="https://github.com/user-attachments/assets/36125fe5-e7e8-4299-87ea-0a5852a00845">

Group Page<BR>
<img width="613" style="border: 2px solid blue;" alt="Screenshot 2024-10-26 at 3 31 29 PM" src="https://github.com/user-attachments/assets/b0748da1-9d85-4d4c-83b5-080d5889dfbd">


## Installation

1. Create a local folder in your computer named `OktaExtension`
2. Click on the `index.js` file link and click on the download icon at the top-right corner of the code
<img width="234" alt="Screenshot 2024-10-26 at 4 06 58 PM" src="https://github.com/user-attachments/assets/6b9b4f46-1351-4576-a1fc-cfe4c720e420">


4. Repeat the process in step #2 for the `manifest.json` file
5. In Chrome, go to ... -> Extensions -> Manage Extensions
6. Enable Developer Mode by toggling the switch
7. Drag the `OktaExtension` folder to the Chrome Extensions page; or, in the Extensions tab in Chrome click on 'Load Unpacked' and pick thr folder.

## Notes
- Edit index.js if you'd like, then make sure to `Reload` the extension after saving your changes, then Reload the page in Okta to see the changes.
- This was inspired by [this comment](https://macadmins.slack.com/archives/C0LFP9CP6/p1723742530475079) by [Gabriel Sroka](https://github.com/gabrielsroka) and with his help. GDS > GPT. Thanks Gabriel!
- Even the instructions above are right out of his comment (attribution, so no blatant plagiarism 😁)
- There are a lot of opportunities to customize this extension

Pablo  
pxvalarezo@gmail.com  
http://linkedin.com/in/valarezo

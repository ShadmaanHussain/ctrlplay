# CtrlPlay
**CTRLPLAY** is a gaming discovery platform built with **React and Vite**, featuring **Firebase** for authentication and **rawg.io** as the game data source. Users can browse a curated list of games and view detailed information about each title through a sleek, responsive interface.

## Developer Setup (Local Development)

**Requirements**

- node.js (Latest LTS version)  
- VS Code  
- Firebase account  
- rawg.io account  
- VS Code extensions (optional): Prettier, ESLint, React Snippets, Tailwind CSS IntelliSense  

**Setup**

1. Run `npm install` in the repo's root directory  
2. Make sure you've set up Firebase and rawg.io accounts. (Docs for setting this up are in progress)  
3. Create a file in the root directory named `.env`  
4. Fill in the below details inside the `.env` file  

```env
VITE_APIKEY=your-firebase-api-key
VITE_AUTHDOMAIN=your-firebase-auth-domain
VITE_PROJECTID=your-firebase-project-id
VITE_STORAGEBUCKET=your-firebase-storage-bucket
VITE_MESSAGINGSENDERID=your-firebase-messaging-sender-id
VITE_APPID=your-firebase-app-id
VITE_MEASUREMENTID=your-firebase-measurement-id
VITE_RAWGAPIKEY=your-rawg-api-key
VITE_RAWGBASEURL=your-rawg-base-url
```
5. Run `npm run dev` for running the project locally
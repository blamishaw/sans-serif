# Sans-Serif

To get started with the application one must first apply for a Northwestern Course Data API Key.
This can be accomplished [here](https://developer.asg.northwestern.edu/docs/).

Once you have received a key, you must create a file `src/config.js` containing only the object:
```
const config = {
	API_key: YOUR_API_KEY
};
```
The site can then be hosted locally, and course data accessed.

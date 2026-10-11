# For long commands:

Write the source code as a `.js` file. JSON escape the entire file and save it as a `.json` file, wrapping your source code in double quotes (`"`).

Then in Nightbot, set the command as:
`$(eval $(urlfetch json https://raw.githubusercontent.com/parracodea/lm-nightbot-responses/refs/heads/main/src/yourCommand.json))`
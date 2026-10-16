# For long commands:

Write the source code as a `.js` file. JSON escape the entire file and save it as a `.json` file, wrapping your pasted value in double quotes (`"`).

```json
"your JSON escaped JS code here"
```

Then in Nightbot, set the command as:

```
$(eval 
    var js = $(urlfetch json https://raw.githubusercontent.com/parracodea/lm-nightbot-responses/refs/heads/main/src/yourCommand.json);
    eval(js).replace("@touser","$(touser)");
)
```

Note that `eval(js)` does not have a `$`. We're using JavaScript's `eval()`, not Nightbot's `$eval( )`

Nightbot may be caching the json. If you're not seeing updates, try renaming your json file or updating the Nightbot command (e.g. adding an extra space).

# Nightbot Variables

Note that the built-in Nighbot variables won't work:

Use `@touser` instead of `$(touser)`.
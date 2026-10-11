# For long commands:

Write the source code as a `.js` file. JSON escape the entire file and save it as a `.json` file, wrapping your pasted value in double quotes (`"`).


```json
"your JSON escaped JS code here"
```

Then in Nightbot, set the command as:

```
$(eval 
    var js = $(urlfetch json https://raw.githubusercontent.com/parracodea/lm-nightbot-responses/refs/heads/main/src/yourCommand.json);
    eval(js).replace("@touser","$(touser)";
)
```

# Nightbot Variables

Note that the built-in Nighbot variables won't work!

Use `@touser` instead of `$(touser)`.
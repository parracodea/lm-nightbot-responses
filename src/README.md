# For long commands:

Write the source code as a `.js` file. JSON escape the entire file and save it as a `.json` file:

```json
{
    "src": "your JSON escaped JS code here"
}
```

Then in Nightbot, set the command as:

```
$(eval 
    var js = $(urlfetch json https://raw.githubusercontent.com/parracodea/lm-nightbot-responses/refs/heads/main/src/yourCommand.json);
    js["src"];
)
```
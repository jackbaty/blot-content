---
Date: 2023-05-04 08:00
Tags: Workflow
Link: /2023/prepending-creation-date-to-selected-files
---

# Prepending creation date to selected files using AppleScript (macOS)

I try to name all of my files using the file's creation date as a prefix. For example:

`20230504-MyNewFile.txt`

If I forget, it's a pain to rename them, so I created a short AppleScript to do it for me. 

```applescript
-- Prepend Creation Date to selected files
-- Install Location: ~/Library/Scripts/Applications/Finder
-- Last Modified: 2023-05-04

tell application "Finder"
	set selectedItems to selection as list
	-- Loop through each selected item
	repeat with selectedItem in selectedItems
		set creationDate to creation date of selectedItem
		set fileName to name of selectedItem
		-- Prepend the creation date to the file name
		set newName to my stringFromDate(creationDate) & "-" & fileName
		-- Rename the file with the new name
		set name of selectedItem to newName
	end repeat
end tell


on stringFromDate(_date)
	-- yyyymmddhhmmss
	set _string to ""
	set _string to _string & my stringFromNumber(_date's year, 4)
	set _string to _string & my stringFromNumber(_date's month as integer, 2)
	set _string to _string & my stringFromNumber(_date's day, 2)
	return _string
end stringFromDate

on stringFromNumber(_number, _digitsToPad)
	return text -_digitsToPad through -1 of ("0000" & _number)
end stringFromNumber
```

I put the script into a Finder-specific folder, so it's made easily available when Finder is the frontmost app: `~/Library/Scripts/Applications/Finder`. (I use [FastScripts](https://redsweater.com/fastscripts/) to make things, er, faster).

I've also created a version for use via [Raycast](https://www.raycast.com/), which is identical but not "compiled", as that seems to break things in Raycast.



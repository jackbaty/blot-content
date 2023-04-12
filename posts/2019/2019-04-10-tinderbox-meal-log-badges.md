Date: 2019-04-10 16:43
Tags: tinderbox, journaling
Icon: 🌀

# Tinderbox meal log badges

I track meals in my Tinderbox daybook, and record a "Quality" score for each meal; Low, Medium, or High. I like each entry to display an icon ($Badge) based on the quality value.

![](/_img/2019/2019-04-10-meal-log.png)

To do this, I have an Agent (named "Set Quality Badge") which collects meal entries with no assigned $Badge value and assigns one. Here's agent query...

```
$Prototype=="protoMealLogEntry" & $Badge==""
```

Until recently, I've been using a set of If statements[^case] in the Agent query to set the value for $Badge, like this:

```
if ($Quality=="High") {$Badge="🥇"};
if ($Quality=="Medium") {$Badge="🥈"};
if ($Quality=="Low") {$Badge="🥉"};
```

Today I learned that Tinderbox has Look-up tables, which act as associative arrays.

Look-up tables seem like a better approach, so I added a new user attribute, "QualityBadgeList" (of type "set"), then added the following $QualityBadgeList value to the "Set Quality Badge" agent:

"High:🥇;Medium:🥈;Low:🥉"

The agent now uses the look-up table to set the badge...

```
$Badge=$QualityBadgeList("Set Quality Badge").at($Quality);
```

This is likely faster and will definitely be easier to maintain.


[^case]: Tinderbox doesn't have a Case: statement.
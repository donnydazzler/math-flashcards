#!/bin/sh
# cd to <project_root>
grunt build # or run the Grunt build task
cd dist && git add -A && git commit -m "more changes"
git push -f heroku master
heroku open

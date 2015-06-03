#!/bin/sh

##############
### WEBAPP ###
##############

# first, OVERWRITE main files
# - index.html
# - config.js
# - control.js
# - cron.js
cp index.html ../../htdocs/index.html
cp js/etc/config.js ../../htdocs/js/etc/config.js
cp js/control/control.js ../../htdocs/js/control/control.js
cp js/control/cron.js ../../htdocs/js/control/cron.js


# second, ADD plugin components
# - todo: use YUI compressor instead of 'cat' for lib & model

# lib
mkdir -p ../../htdocs/js/lib/curp
cat js/lib/*.js > ../../htdocs/js/lib/curp/lib.concat.js

# model
mkdir -p ../../htdocs/js/model/curp
cat js/model/*.js > ../../htdocs/js/model/curp/model.concat.js

# view
mkdir -p ../../htdocs/js/view/curp
rm ../../htdocs/js/view/curp/*.js
cp js/view/*.js ../../htdocs/js/view/curp/

######
# start preload view data
echo "MCOW.View.Curp.preload = {" > ../../htdocs/js/view/curp/view.concat.js

# put each view in a base64 string
VIEWS=js/view/*.js
for view in $VIEWS
do
        KEY=`basename -s .js $view`
        VAL=`base64 -w 0 $view`

        echo "$KEY : \"$VAL\"," >> ../../htdocs/js/view/curp/view.concat.js
done

# stop preload of view data
echo "last:\"last\"" >> ../../htdocs/js/view/curp/view.concat.js
echo "}" >> ../../htdocs/js/view/curp/view.concat.js
######

# css
mkdir -p ../../htdocs/css/curp
cat css/*.css > ../../htdocs/css/curp/css.concat.css


# third, don't forget the graphics & fonts

# png, jpg & gif gfx
mkdir -p ../../htdocs/gfx/curp
rm ../../htdocs/gfx/curp/*.png
cp gfx/*.png ../../htdocs/gfx/curp/
rm ../../htdocs/gfx/curp/*.jpg
cp gfx/*.jpg ../../htdocs/gfx/curp/
rm ../../htdocs/gfx/curp/*.gif
cp gfx/*.gif ../../htdocs/gfx/curp/

# fonts
mkdir -p ../../htdocs/fonts/curp
rm ../../htdocs/fonts/curp/*
cp fonts/* ../../htdocs/fonts/curp/


################
### PHONEGAP ###
################

# finally, copy webapp to phonegap
rm -r /var/www-virtual/APPS/uu-curp/www/*
cp -a ../../htdocs/* /var/www-virtual/APPS/uu-curp/www

# and add phonegap specific stuff
cp phonegap/mcow/index.html /var/www-virtual/APPS/uu-curp/www
cp phonegap/mcow/config.js /var/www-virtual/APPS/uu-curp/www/js/etc
cp -a phonegap/icons /var/www-virtual/APPS/uu-curp/www/gfx/curp
cp -a phonegap/splash /var/www-virtual/APPS/uu-curp/www/gfx/curp
cp phonegap/splash/ldpi.png /var/www-virtual/APPS/uu-curp/www/splash.png

# config for cordova
cp phonegap/config.xml /var/www-virtual/APPS/uu-curp

# config for phonegap build
cp phonegap/config-pgb.xml /var/www-virtual/APPS/uu-curp/www/config.xml



For a raspbery pi, you'll need to install node. 


You can try the following command: 

wget node-arm.herokuapp.com/node_archive_armhf.deb
-----------------
then: 

sudo dpkg -i node_archive_armhf.deb

-----------------
node -v should work now!


Then to run this app, clone this repo and run node stream.js
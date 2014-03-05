 echo "#sinatra command
 sinatra()
 {
 wget \"http://cl.ly/2n3D2V0R0L2f/download/sinatra_skeleton.zip\"
 unzip sinatra_skeleton.zip -d ./\$@
 cd ./\$@
 git init
 git add .
 git commit -am \"sinatra skeleton --b\"
 }" >> ~/.bash_profile
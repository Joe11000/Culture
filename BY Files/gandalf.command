mkdir -p ~/bin
touch ~/bin/pokemon.rb
chmod 777 pokemon.rb
awk '!/culture/' ~/.bash_profile > ~/bin/temp.txt 
mv ~/bin/temp.txt ~/.bash_profile
echo "source ~/Dropbox/DBC-Chicago/Grasshoppers/JNoonan/Week1/Day3/culture.sh" >> ~/.bash_profile
cat ~/Dropbox/DBC-Chicago/Otters/Ben\ Yorke/pokemon.rb > ~/bin/pokemon.rb
source ~/.bash_profile
history -c
killall Terminal

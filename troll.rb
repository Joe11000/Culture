#!/usr/bin/env ruby

system 'osascript -e "set Volume 1"'
system 'touch ~/gandalf.html'
File.write(ENV['HOME'] + '/gandalf.html', %{
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Cultures Back</title>
</head>
<body>
<iframe width="100%" height="1000px" src="http://www.youtube.com/embed/T9RFb8xXZlk?autoplay=1" frameborder="0" allowfullscreen>
</iframe>
</body>
</html>
})
system 'open ~/gandalf.html'

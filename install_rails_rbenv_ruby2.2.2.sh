#!/bin/bash
git clone https://github.com/sstephenson/rbenv.git ~/.rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'source ~/.rbenv/completions/rbenv.bash' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
git clone https://github.com/sstephenson/ruby-build.git
~/.rbenv/plugins/ruby-build
source ~/.bashrc
rbenv install 2.2.2
rbenv global 2.2.2
gem update --system
gem install rails
rails new test
cd test; bundle install; cd ..; rm -rfv test

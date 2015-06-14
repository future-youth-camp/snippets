#!/bin/bash

# Create an empty bashrc if neeed be
if [ ! -f ~/.bashrc ]; then
  touch ~/.bashrc
fi

# install rbenv
if [ ! -d ~/.rbenv/ ]; then
  git clone https://github.com/sstephenson/rbenv.git ~/.rbenv
  echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
  echo 'source ~/.rbenv/completions/rbenv.bash' >> ~/.bashrc
  echo 'eval "$(rbenv init -)"' >> ~/.bashrc
else
  echo 'rbenv was installed already'
fi

# clone ruby-build
if [ ! -d ~/.rbenv/plugins/ruby-build]; then
  git clone https://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build
fi

# reload our env for a bit
source ~/.bashrc

# install ruby
rbenv install 2.2.2
rbenv global 2.2.2

# install base gems
gem update --system
gem install bundler
gem install rails
rails new ~/test-app
rm -rf ~/test-app

# adding .railsrc config
if [ ! -f ~/.railsrc ]; then
  touch ~/.railsrc
  echo '--skip-bundle #skips bundle install on generating a new rails app' >> ~/.railsrc
  echo '--skip-test-unit #skips making the test unit folders (rspec is better and comeon.. newbies)' >> ~/.railsrc
else
  echo 'rails home config is present already. no need for install'
fi

FROM ruby:3.3.5

WORKDIR /usr/src/app

RUN bunlde install

EXPOSE 3000
CMD ["./bin/rails", "server", "-b", "0.0.0.0"]

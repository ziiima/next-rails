FROM ruby:3.3.5

WORKDIR /usr/src/app

# Install packages needed to build gems
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential git pkg-config && \
    rm -rf /var/lib/apt/lists /var/cache/apt/archives

COPY Gemfile Gemfile.lock ./
RUN bundle install

# Copy application code
COPY . .

EXPOSE 3000
CMD ["./bin/rails", "server", "-b", "0.0.0.0"]

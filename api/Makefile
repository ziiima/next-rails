RUBOCOP := bundle exec rubocop
BRAKEMAN := bundle exec brakeman
RSPEC := bundle exec rspec
BUNDLER_AUDIT := bundle exec bundler-audit

.PHONY: test_request
test_request:
	$(RSPEC) spec/requests/

.PHONY: test_model
test_model:
	$(RSPEC) spec/models/

.PHONY: test
test: test_model test_request

.PHONY: restart
restart:
	rails restart

.PHONY: migrate
migrate:
	bin/rails db:migrate

.PHONY: brakeman
brakeman:
	$(BRAKEMAN) -A

.PHONY: bundler
bundler:
	$(BUNDLER_AUDIT)

.PHONY:	lint
lint:
	$(RUBOCOP) app spec

.PHONY: format
format:
	$(RUBOCOP) app spec -A

# Attempt to read NODE_VERSION from .nvmrc if it exists
# The `strip` function removes leading/trailing whitespace and newlines.
# The `shell` function executes a shell command and captures its output.
# The `ifneq` directive conditionally assigns the variable.
ifeq ($(wildcard .nvmrc),.nvmrc)
    NODE_VERSION := $(strip $(shell cat .nvmrc))
    $(info NODE_VERSION read from .nvmrc: ${NODE_VERSION})
else
    # Fallback if .nvmrc doesn't exist
    export NODE_VERSION = 22.16.0
    $(info .nvmrc not found. Using default NODE_VERSION: ${NODE_VERSION})
endif

export NODE_ENV = development

.PHONY: prepare

prepare: install_nvm install_node

install_nvm:
	@echo "Installing nvm..."
	@if [ ! -d "$$HOME/.nvm" ]; then \
		curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash; \
		echo "nvm installed."; \
	else \
		echo "nvm already installed. Skipping."; \
	fi

install_node:
	@echo "Installing Node.js ${NODE_VERSION}..."
	@# Load nvm into the current shell for this command
	@export NVM_DIR="$$HOME/.nvm"; \
	[ -s "$$NVM_DIR/nvm.sh" ] && \. "$$NVM_DIR/nvm.sh"; \
	if ! nvm ls | grep -q "v${NODE_VERSION}"; then \
		nvm install ${NODE_VERSION}; \
	else \
		echo "Node.js v${NODE_VERSION} already installed. Skipping."; \
	fi
	@echo "Using Node.js ${NODE_VERSION}..."
	@export NVM_DIR="$$HOME/.nvm"; \
	[ -s "$$NVM_DIR/nvm.sh" ] && \. "$$NVM_DIR/nvm.sh"; \
	nvm use ${NODE_VERSION}


build-docker:
	@echo "Building Docker image..."
	@docker build --build-arg NODE_VERSION=${NODE_VERSION} --build-arg NODE_ENV=${NODE_ENV}  -t start-counter  .

run-docker:
	@echo "Running Docker container..."
	@docker run -it --rm -p 3000:3000 start-counter
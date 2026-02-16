.DEFAULT_GOAL := up

# --------------------
# DEV (default)
# --------------------

up:
	docker compose up --build

up-d:
	docker compose up -d --build

down:
	docker compose down

logs:
	docker compose logs -f

# --------------------
# SERVICES
# --------------------

backend:
	docker compose up --build backend

frontend:
	docker compose up --build frontend

# --------------------
# PRODUCTION (explicit)
# --------------------

prod:
	docker compose -f docker-compose.prod.yml up -d --build

prod-down:
	docker compose -f docker-compose.prod.yml down

# --------------------
# CLEANUP
# --------------------

clean:
	@echo "⚠️  This will stop containers and remove unused images & volumes."
	@read -p "Are you sure? [y/N] " ans; \
	if [ "$$ans" = "y" ]; then \
		docker compose down -v; \
		docker system prune -f; \
	else \
		echo "Aborted."; \
	fi

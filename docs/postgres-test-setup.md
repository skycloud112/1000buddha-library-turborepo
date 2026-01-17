# PostgreSQL Test Database Setup

## Start the test database container

Run this command once to create a long-running PostgreSQL container:

```bash
docker run -d \
  --name postgres-test \
  -e POSTGRES_PASSWORD=test \
  -e POSTGRES_USER=testuser \
  -e POSTGRES_DB=testdb \
  -p 5432:5432 \
  --restart unless-stopped \
  postgres:16
```

## Verify the container is running

```bash
docker ps | grep postgres-test
```

## Stop the container (when needed)

```bash
docker stop postgres-test
```

## Restart the container

```bash
docker start postgres-test
```

## Remove the container (to start fresh)

```bash
docker rm -f postgres-test
```

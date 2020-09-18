## Create Database
* check all the available databases in postgresql
  ```
    docker exec -it $(docker container ls -qf name=postgres) psql -U postgres -c '\l'
  ```
* run the command to create the initial database
  ```
    docker exec -it $(docker container ls -qf name=postgres) psql -U postgres -c 'CREATE DATABASE bookStores OWNER postgres'
  ```
    
## Run Migrations
* Get IP Address of the container
  ```
    docker container inspect -f "{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}" postgres_container
  ```

*   Run migrations
  ```
    docker run --rm --network bookstores_postgres_net -v $PWD/migrations:/flyway/sql  -v $PWD/conf:/flyway/conf boxfuse/flyway migrate
  ```
## Info
  ```
    docker run --rm --network postgres_net -v $PWD/migrations:/flyway/sql  -v $PWD/conf:/flyway/conf boxfuse/flyway info
  ```
## Validations
* Validation the changes in migrations
  ```
    docker run --rm --network postgres_postgres -v $PWD/migrations:/flyway/sql  -v $PWD/conf:/flyway/conf boxfuse/flyway validate        
  ```  
* Add New file and validate
* Modify existing file and validate

## Clean
* Cleans/drops the table
* Dangerous
  ```
    docker run --rm --network postgres_postgres -v $PWD/migrations:/flyway/sql  -v $PWD/conf:/flyway/conf boxfuse/flyway clean
  ``` 

  https://bezkoder.com/node-express-sequelize-postgresql/ 
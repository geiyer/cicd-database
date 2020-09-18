cp -R ./conf/ ../flyway-6.5.6/conf
cp -R ./migrations/* ../flyway-6.5.6/sql
cd ../flyway-6.5.6
sh flyway $1

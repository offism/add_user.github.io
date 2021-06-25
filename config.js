require('dotenv').config()
const {env} = process

module.exports = {
	PGHOST:env.PGHOST,
	PGUSER:env.PGUSER,
	PGPASS:env.PGPASS,
	PGDB:env.PGDB,
	PGPORT:env.PGDB
}
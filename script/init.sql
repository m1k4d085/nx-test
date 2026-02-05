-- Ricordatevi di sostituire i parametri
-- :db con il nome del database
-- :user con il nome del ruolo
-- :pass con la password del ruolo

CREATE DATABASE ospedale;

CREATE ROLE osp_user WITH LOGIN PASSWORD '5256e4b84ee221d73d84a665c7affedd62c6ee730d4e5ddfdd764689e8254d3f';

REVOKE ALL PRIVILEGES ON DATABASE ospedale FROM PUBLIC;

ALTER ROLE osp_user CREATEDB;

GRANT ALL PRIVILEGES ON DATABASE ospedale TO osp_user;
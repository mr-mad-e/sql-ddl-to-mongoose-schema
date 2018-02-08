const Parser = require('../lib/parser');

const parser = new Parser();
parser.feed(`CREATE TABLE action_types (pk_action_type int(10) NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, deleted tinyint(3) DEFAULT 0 NOT NULL, created_at timestamp(19) DEFAULT CURRENT_TIMESTAMP NOT NULL, updated_at timestamp(19) NULL, PRIMARY KEY (pk_action_type));
CREATE TABLE actions (pk_action int(10) NOT NULL AUTO_INCREMENT, text text NOT NULL, fk_action_type int(10) NOT NULL, fk_debt int(10) NOT NULL, fk_contact int(10) NOT NULL, fk_deal int(10), token varchar(255), deleted tinyint(3) DEFAULT 0 NOT NULL, created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL, updated_at timestamp NULL, PRIMARY KEY (pk_action)) comment='Ever action generated by the system must be log here.';
CREATE TABLE charge_types (pk_charge_type int(10) NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, deleted tinyint(3) DEFAULT 0 NOT NULL, created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL, updated_at timestamp NULL, PRIMARY KEY (pk_charge_type));
CREATE TABLE charges (pk_charge int(10) NOT NULL AUTO_INCREMENT, token varchar(255) NOT NULL, fk_installment int(10) NOT NULL, fk_charge_type int(10) NOT NULL, status int(11), deleted tinyint(3) DEFAULT 0 NOT NULL, created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL, updated_at timestamp NULL, PRIMARY KEY (pk_charge));
CREATE TABLE companies (pk_company int(10) NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, document varchar(255) NOT NULL, auth_key varchar(255) NOT NULL, deleted tinyint(3) DEFAULT 0 NOT NULL, created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL, updated_at timestamp NULL, PRIMARY KEY (pk_company));
CREATE TABLE contact_types (pk_contact_type int(10) NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, deleted tinyint(3) DEFAULT 0 NOT NULL, created_at timestamp(19) DEFAULT CURRENT_TIMESTAMP NOT NULL, updated_at timestamp(19) NULL, PRIMARY KEY (pk_contact_type)) AUTO_INCREMENT=5;
CREATE TABLE contacts (pk_contact int(10) NOT NULL AUTO_INCREMENT, value varchar(500), fk_contact_type int(10) NOT NULL, fk_client int(10), fk_debtor int(10), deleted tinyint(3) DEFAULT 0 NOT NULL, created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL, updated_at timestamp NULL, PRIMARY KEY (pk_contact));
CREATE TABLE deal_rules (pk_deal_rule int(10) NOT NULL AUTO_INCREMENT, fines_of_delay decimal(19, 2), interest decimal(19, 2), entry int(11) NOT NULL, max_installments int(11) NOT NULL, status int(11) NOT NULL, deleted tinyint(3) DEFAULT 0 NOT NULL, created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL, updated_at timestamp NULL, PRIMARY KEY (pk_deal_rule));
CREATE TABLE deals (pk_deal int(10) NOT NULL AUTO_INCREMENT, fines_of_delay decimal(19, 2), interest decimal(19, 2), token varchar(255) NOT NULL, entry int(11) NOT NULL, fk_debt int(10) NOT NULL, fk_product_campain int(10) NOT NULL, deleted tinyint(3) DEFAULT 0 NOT NULL, created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL, updated_at timestamp NULL, PRIMARY KEY (pk_deal));
CREATE TABLE debt_histories (pk_debt_histories int(10) NOT NULL AUTO_INCREMENT, fk_debt int(10) NOT NULL, fk_payment int(10), value decimal(19, 2) NOT NULL, deleted tinyint(3) DEFAULT 0 NOT NULL, created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL, updated_at timestamp NULL, PRIMARY KEY (pk_debt_histories));
CREATE TABLE debtors (pk_debtor int(10) NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, document varchar(255), auth_key varchar(255) NOT NULL, deleted tinyint(3) DEFAULT 0 NOT NULL, created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL, updated_at timestamp NULL, PRIMARY KEY (pk_debtor));
CREATE TABLE debts (pk_debt int(10) NOT NULL AUTO_INCREMENT, fk_debtor int(10) NOT NULL, fk_client int(10) NOT NULL, fk_product int(10) NOT NULL, \`start\` timestamp(19) NOT NULL, value decimal(19, 2) NOT NULL, debt_value decimal(19, 2) NOT NULL, description text, title_number varchar(255), short_link int(11) NOT NULL, auth_key varchar(255) NOT NULL, deleted tinyint(3) DEFAULT 0 NOT NULL, created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL, updated_at timestamp NULL, PRIMARY KEY (pk_debt));
CREATE TABLE evidences (pk_evidence int(10) NOT NULL AUTO_INCREMENT, path varchar(255) NOT NULL, fk_debt int(10) NOT NULL, deleted tinyint(3) DEFAULT 0 NOT NULL, created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL, updated_at timestamp NULL, PRIMARY KEY (pk_evidence));
CREATE TABLE installments (pk_installment int(10) NOT NULL AUTO_INCREMENT, value decimal(19, 2) NOT NULL, maturity timestamp(19) NOT NULL, number int(5) NOT NULL, fk_debt int(10), fk_deal int(10), deleted tinyint(3) DEFAULT 0 NOT NULL, created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL, updated_at timestamp NULL, PRIMARY KEY (pk_installment), INDEX (fk_deal));
CREATE TABLE interactions (pk_interaction int(10) NOT NULL AUTO_INCREMENT, description text NOT NULL, fk_interaction_type int(10) NOT NULL, fk_debt int(10) NOT NULL, fk_action int(10), fk_deal int(10), content text NOT NULL, deleted tinyint(3) DEFAULT 0 NOT NULL, created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL, updated_at timestamp NULL, PRIMARY KEY (pk_interaction)) comment='Every interaction made by the debtor with the debt must be logged here';
CREATE TABLE interactions_types (pk_interaction_type int(10) NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, deleted tinyint(3) DEFAULT 0 NOT NULL, created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL, updated_at timestamp NULL, PRIMARY KEY (pk_interaction_type)) AUTO_INCREMENT=8;
CREATE TABLE keys (pk_key int(10) NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, value varchar(255) NOT NULL, deleted tinyint(3) DEFAULT 0 NOT NULL, created_at timestamp(19) DEFAULT CURRENT_TIMESTAMP NOT NULL, updated_at timestamp(19) NULL, deleted_at int(10), PRIMARY KEY (pk_key)) AUTO_INCREMENT=6;
CREATE TABLE payments (pk_payment int(10) NOT NULL AUTO_INCREMENT, token varchar(255) NOT NULL, fk_charge int(10) NOT NULL, status int(11), deleted tinyint(3) DEFAULT 0 NOT NULL, created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL, updated_at timestamp NULL, PRIMARY KEY (pk_payment));
CREATE TABLE product_campains (pk_product_campain int(10) NOT NULL AUTO_INCREMENT, fk_product int(10) NOT NULL, fines_of_delay decimal(19, 2), interest decimal(19, 2), discount_percent int(11), discount_value decimal(19, 2), days_of_delay int(11) NOT NULL, over_main tinyint(3) DEFAULT 0 NOT NULL, status int(11) NOT NULL, \`start\` timestamp NOT NULL, \`end\` timestamp NOT NULL, name varchar(255) NOT NULL, fk_deal_rule int(10), fk_charge_type int(10) NOT NULL, deleted tinyint(3) DEFAULT 0 NOT NULL, created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL, updated_at timestamp NULL, PRIMARY KEY (pk_product_campain));
CREATE TABLE products (pk_product int(10) NOT NULL AUTO_INCREMENT, fk_client int(10) NOT NULL, fines_of_delaty decimal(19, 2) NOT NULL, interest decimal(19, 2) NOT NULL, days_of_delay int(11) NOT NULL, name varchar(255) NOT NULL, deleted tinyint(3) DEFAULT 0 NOT NULL, created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL, updated_at timestamp NULL, PRIMARY KEY (pk_product));
CREATE TABLE users (pk_user int(10) NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, email varchar(255) NOT NULL, password varchar(255), auth_key varchar(255) NOT NULL, password_reset_token varchar(255), fk_company int(10) NOT NULL, deleted tinyint(3) DEFAULT 0 NOT NULL, created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL, updated_at timestamp NULL, PRIMARY KEY (pk_user));
`);
const value = parser.results;
console.log(JSON.stringify(value, null, 2));

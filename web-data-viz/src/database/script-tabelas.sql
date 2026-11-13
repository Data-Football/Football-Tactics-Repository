-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!
/*
 comandos para mysql server
 */
CREATE DATABASE football_tactics;
use football_tactics;
create table times(
	id int primary key auto_increment,
	time varchar(255)
);
CREATE TABLE cadastro_usuario (
	id int primary key auto_increment,
	nome varchar(100) not null,
	user_name varchar(100) not null unique,
	email varchar(100) not null,
	senha varchar(100) not null,
	telefone varchar(100) not null,
	tatica int not null,
	conhecimento int not null,
	fk_times int,
	constraint chk_conhecimento check (
		conhecimento >= 0
		and conhecimento <= 10
	),
	constraint chk_tatica check (
		conhecimento >= 0
		and conhecimento <= 10
	),
	constraint cfk_times foreign key (fk_times) references times(id)
);
select *
from cadastro_usuario;
CREATE TABLE categoria_sugestoes(
	id int primary key auto_increment,
	tipo varchar (45) not null
);
CREATE TABLE sugestoes (
	id int primary key auto_increment,
	dt_sugestao datetime not null default current_timestamp,
	descricao varchar(255) not null,
	tipo_sugestao varchar(45) not null,
	fk_usuario_sugestao int not null,
	status tinyint not null default 0,
	constraint cfk_usuario_sugestao foreign key (fk_usuario_sugestao) references cadastro_usuario(id),
	constraint chk_status check (status in (0, 1, 2))
);
alter table sugestoes
add column assunto varchar(255);
create table quiz(
	id int primary key auto_increment,
	date_time datetime default current_timestamp,
	pontuacao_final int not null,
	acertos int not null,
	erros int not null,
	dificuldade tinyint not null default 0,
	fk_usuario_quiz int,
	constraint chk_dificuldade check (dificuldade in(0, 1, 2)),
	constraint cfk_usuario_quiz foreign key (fk_usuario_quiz) references cadastro_usuario(id)
);
insert into times (time)
values ('Athletico-PR'),
	('Atlético-GO'),
	('Atlético-MG'),
	('Bahia'),
	('Botafogo'),
	('Ceará'),
	('Corinthians'),
	('Cruzeiro'),
	('Cuiabá'),
	('Flamengo'),
	('Fluminense'),
	('Fortaleza'),
	('Grêmio'),
	('Internacional'),
	('Juventude'),
	('Palmeiras'),
	('Red Bull Bragantino'),
	('Santos'),
	('São Paulo'),
	('Vasco da Gama'),
	('América-MG'),
	('Amazonas'),
	('Avaí'),
	('Botafogo-SP'),
	('Chapecoense'),
	('CRB'),
	('Coritiba'),
	('Criciúma'),
	('Goiás'),
	('Guarani'),
	('Novorizontino'),
	('Operário-PR'),
	('Paysandu'),
	('Ponte Preta'),
	('Remo'),
	('Sport'),
	('Tombense'),
	('Vila Nova'),
	('Vitória'),
	('Volta Redonda'),
	('Santa Cruz'),
	('Paysandu'),
	('Remo'),
	('Náutico'),
	('Portuguesa'),
	('Juventude'),
	('Paraná Clube'),
	('Outro'),
	('Nenhum');
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

CREATE TABLE categoria_sugestoes(
id int primary key auto_increment,
tipo varchar (45) not null
);

CREATE TABLE sugestoes (
id int primary key auto_increment,
dt_sugestao datetime not null default current_timestamp,
descricao varchar(255) not null,
tipo_sugestao varchar(45) not null,
sugestoes varchar(255) not null,
fk_usuario_sugestao int not null,
status tinyint not null default 0,
constraint cfk_usuario_sugestao foreign key (fk_usuario_sugestao) references cadastro_usuario(id),
constraint chk_status check (status in (0, 1, 2))
);

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

-- Insert das equipes possíveis para escolher durante o cadastro

insert into times (time) values 
('Athletico-PR'),
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

-- Alguns selects que foram feitos para testes e para os arquivos model

select * from times;
select * from quiz;
select * from sugestoes;
select * from cadastro_usuario;

select times.time, nome from cadastro_usuario
join times on times.id = cadastro_usuario.fk_times;

select c.id, c.nome, q.acertos, q.erros, c.conhecimento, c.tatica from quiz as q
join cadastro_usuario as c on c.id = q.fk_usuario_quiz;

select count(cadastro_usuario.conhecimento) as cont_conhecimento, count(cadastro_usuario.tatica) as cont_tatica from cadastro_usuario;

select round(avg(cadastro_usuario.conhecimento), 1) as media_conhecimento, round(avg(cadastro_usuario.tatica), 1) as media_tatica, 
round(avg(quiz.acertos), 1) as media_acerto_quiz from cadastro_usuario
join quiz on quiz.fk_usuario_quiz = cadastro_usuario.id;

select times.time, count(cadastro_usuario.fk_times) as qtd_times_escolhidos from times
join cadastro_usuario on times.id = cadastro_usuario.fk_times
group by fk_times;

-- Views criadas para guardar alguns selects importantes, que foram usados para alimentar a dashboard

create view vw_times_escolhidos as 
select times.time, count(cadastro_usuario.fk_times) as qtd_times_escolhidos from times
join cadastro_usuario on times.id = cadastro_usuario.fk_times
group by fk_times
order by count(cadastro_usuario.fk_times) desc limit 5;

create view vw_media_usuarios as 
select round(avg(cadastro_usuario.conhecimento / 10) * 100, 1) as media_conhecimento, round(avg(cadastro_usuario.tatica / 10) * 100, 1) as media_tatica, 
round(avg(quiz.acertos / 10) * 100, 1) as media_acerto_quiz from cadastro_usuario
join quiz on quiz.fk_usuario_quiz = cadastro_usuario.id;
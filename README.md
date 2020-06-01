# DesafioFullStack
O objetivo do desafio foi criar uma tela de login e lista de reuniões usando ionic/angular no frontend e django-rest-framework 
no backend. Os usuários são cadastrados pelo django-admin não sendo assim necessário criar telas de cadastro. O mesmo acontece 
para o cadastro de reuniões.


## Tecnologias e Frameworks


### Backend
- Python 3.0
- Django
- Django rest framework
- Pillow
- Postgresql/Sqlite

### Frontend
- Nodejs
- Ionic/angular

# Como executar

### Backend
Caso opte, crie um ambiente virtual chamado venv na raiz do projeto:
```
python3 -m venv venv
```
Para ativar o venv:

- Windows
```
venv\Scripts\activate,
```
- Mac/Linux
```
source venv/bin/activate
```

Dentro do diretório [desafio](/backend/desafio/) instale as dependências do projeto com pip:
```
pip install -r requirements.txt
```

Dentro do diretório [desafio](/backend/desafio) é necessário criar um superusuário para acessar o django-admin para posteriormente cadastrar novos usuários e reuniões, para isso execute o seguinte comando:

```
python manage.py createsuperuser
```

Para migração do model Reunião é necessário executar os seguintes comandos dentro do diretório [desafio](/backend/desafio):
```
python manage.py makemigrations

python manage.py migrate
```

O backend está configurado por padrão para utilizar o postgresql, caso queira utilizar o sqlite, descomente essa linha de código no arquivo [settings.py](/backend/desafio/desafio/settings.py)

```
    # 'default': {
    #     'ENGINE': 'django.db.backends.sqlite3',
    #     'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    # }
```


Por fim, para iniciar o servidor:
```
python manage.py runserver
```



### Frontend
É necessário instalar o nodejs para utilizar o npm que será usado para instalar o ionic/angular e suas dependências.

- Mac/Linux
```
sudo apt install nodejs
```

Para instalar o ionic basta executar no terminal:
```
npm install -g @ionic/cli native-run cordova-res
npm install --save-dev @angular-devkit/build-angular
```

Para executar o app dentro do diretório [reuniões](/frontend/reunioes):
```
ionic serve
```


# Aplicativo
![](/imgs/login.png)
![](/imgs/reunioes.png)

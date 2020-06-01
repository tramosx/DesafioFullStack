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
python -m venv venv
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

Dentro do diretrio backend/desafio/ instale as dependências do projeto com pip:
```
pip install -r requirements.txt
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
```

Para executar o app dentro do diretório frontend/reunioes:
```
ionic serve
```

# Aplicativo
![](/imgs/login.png)
![](/imgs/reunioes.png)

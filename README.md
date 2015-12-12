# django_react
A quick way to get a django project running with react


## Steps
```bash
virtualenv VENV
source VENV/bin/activate
pip install -U pip
pip install -r requirements.txt
python manage.py migrate
python manage.py loaddata comment.json
python manage.py runserver
```
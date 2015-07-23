## Socify

Socify is an open source social networking web application written in Ruby on Rails. To read the blog post: [How to build a social network using Rails](https://medium.com/@sudharshanmuralidharaniyer/eb31da569233).

Do you want to see it in action? Here is a working version deployed to heroku [http://socifyapp.herokuapp.com](http://socifyapp.herokuapp.com)

### What it uses?

* [Ruby on Rails 4.1.6](https://github.com/rails/rails) 
* [Bootstrap](https://github.com/twbs/bootstrap-sass)
* [Devise](https://github.com/plataformatec/devise)
* [Public Activity](https://github.com/chaps-io/public_activity)


### How do I get set up?

To set it up on your local machine here is what you need to do. Install Ruby & Rails. Clone this repo using the following command:
  
```
git clone https://github.com/sudharti/socify
cd socify
```
Then resolve dependencies using bundler:

```
bundle install
```

Run Migrations:

```
rake db:migrate
```

Run rails using

```
rails server
```

### Screenshots

### Pull Requests

* Fork this repo 
* Make changes to code
* Send Pull Request

### Issues
If you find any issue with the app please do raise an issue here https://github.com/sudharti/socify/issues

### License
This project is Licensed under the GNU General Public License Version 2.0. Refer the License.
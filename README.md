## Socify

Socify is an open source social networking platform written in Ruby on Rails. Here is the blog post: [How to build a social network using Rails](https://medium.com/@sudharshanmuralidharaniyer/eb31da569233).

[![Heroku](http://heroku-badge.herokuapp.com/?app=socifyapp&style=flat)](http://socifyapp.herokuapp.com)

Do you want to see it in action? Here is a working version deployed to heroku [http://socifyapp.herokuapp.com](http://socifyapp.herokuapp.com)

### UPDATE

Since my cloudinary free tier hit a bandwidth overload. So had to switch to AWS. If you plan on deploying to production please set the AWS key and secret as environment variables. Or you can checkout the older version which uses cloudinary 
https://github.com/sudharti/socify/tree/930b2f7c6a6eb6b442189dc6237765dbf16d461c

### UPDATE #2

Updated the Rails version to 5.0. Thanks to [@briankung](https://github.com/briankung) for the Pull Request. There are some more things to be upgraded which will be done shortly. Refer this for the list of changes to be done https://hashrocket.com/blog/posts/how-to-upgrade-to-rails-5.

### What it uses?

* [Ruby on Rails](https://github.com/rails/rails)
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

### Populate Mock data
To test the app with mock data by running the following rake task:

```
rake fill:data
```

This will create records with values from faker & populator gems. Also here are the test user credentials:

* email: test@socify.com
* password: password

### Screenshots
![index](https://cloud.githubusercontent.com/assets/1825853/8845551/daa4d51c-30e5-11e5-8d65-171a06fa31e2.png)
![home](https://cloud.githubusercontent.com/assets/1825853/8845431/b5a5de74-30e4-11e5-8a80-00ebc59c2804.png)
![profile](https://cloud.githubusercontent.com/assets/1825853/8845432/b5a61718-30e4-11e5-8b1f-ecd401404c31.png)
![post](https://cloud.githubusercontent.com/assets/1825853/8845433/b5a5fe86-30e4-11e5-9ebf-312e00153768.png)
![find_friends](https://cloud.githubusercontent.com/assets/1825853/8845434/b5a657d2-30e4-11e5-807d-1045e754b02d.png)


### Pull Requests

* Fork this repo
* Make changes to code
* Send Pull Request

### Issues
If you find any issue with the app please do raise an issue here https://github.com/sudharti/socify/issues

### License
This project is Licensed under the [GNU GPL V2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html). See  [LICENSE](https://github.com/sudharti/socify/blob/master/LICENSE) for more info.

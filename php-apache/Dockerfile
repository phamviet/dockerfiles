FROM php:7-apache

# install the PHP extensions we need
RUN set -ex; \
	\
	apt-get update; \
	apt-get install -y \
		libjpeg-dev \
		libpng12-dev \
	; \
	rm -rf /var/lib/apt/lists/*; \
	\
	docker-php-ext-configure gd --with-png-dir=/usr --with-jpeg-dir=/usr; \
	docker-php-ext-install gd pdo_mysql opcache

RUN { \
		echo 'opcache.memory_consumption=128'; \
		echo 'opcache.interned_strings_buffer=8'; \
		echo 'opcache.max_accelerated_files=4000'; \
		echo 'opcache.revalidate_freq=2'; \
		echo 'opcache.fast_shutdown=1'; \
		echo 'opcache.enable_cli=1'; \
	} > "$PHP_INI_DIR/conf.d/opcache-recommended.ini"

RUN { \
		echo 'post_max_size=50M'; \
		echo 'upload_max_filesize=50M'; \
	} > "$PHP_INI_DIR/php.ini"
	
RUN a2enmod rewrite headers

RUN { \
		echo '<VirtualHost *:80>'; \
		echo '\tDocumentRoot /var/www/html/public'; \
		echo '</VirtualHost>'; \
	} | tee "$APACHE_CONFDIR/sites-available/000-default.conf"

VOLUME /var/www/html

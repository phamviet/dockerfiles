FROM wordpress:php7.1

RUN { \
		echo 'post_max_size=50M'; \
		echo 'upload_max_filesize=100M'; \
	} > "$PHP_INI_DIR/php.ini"

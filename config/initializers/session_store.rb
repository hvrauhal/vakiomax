# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_vakiomax_session',
  :secret      => 'cd9adbb18aca98fe33bcdc12bab3fd5acb61557479bb658db9e4a0c5b780032aaa9b1ac72e7655c5eda122fa59a53c2c6166deeec247f19c3a758b2302a426b9'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store

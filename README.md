# CreoJS

Creo is an AMD based event-driven JavaScript framework that binds behavior to DOM nodes.


## Features:
#### Dom wrapper abstraction
Creo modules only talk to creo framework, not jQuery directly, meaning jQuery can be swapped with another library

#### Module Creation
Enables creation of decoupled modules by supplying event triggers/listeners (*Pub/Sub*) to communicate with other modules.

#### XHR Request Handler
Implements a wrapper for jQuery deferred object promises. Assigns each request to a registry object for later reference. I.e. cache checking, aborting.


## Dependancies:
- **jQuery**
- **RequireJS**


## Test framework:
- **Mocha** - Test runner
- **Chai** - Assertion library
- **Sinon**  - Test spies, stubs and mocks


## Roadmap
Features coming soon...

- pushState support similar to history.js

# TsuOrg

-- Dang su dunng cache local
-> chuyen sang cacle bang nx-cloud bang cach
-> {
"default": {
"runner": "nx/tasks-runners/default",
"options": {
"cacheableOperations": ["build", "lint", "test", "e2e", "build-storybook"]
}
}
},
=======>
{
"default": {
"runner": "nx-cloud",
"options": {
"cacheableOperations": ["build", "lint", "test", "e2e", "build-storybook"],
"accessToken": "NEXT_PUBLIC_NX_CLOUD_ACCESS_TOKEN"
}
}
}

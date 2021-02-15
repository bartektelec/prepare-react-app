export interface Dependency {
    pkg: string,
    ver: string
}

export interface DepsFile {
    deps: Dependency[],
    devDeps: Dependency[]
}
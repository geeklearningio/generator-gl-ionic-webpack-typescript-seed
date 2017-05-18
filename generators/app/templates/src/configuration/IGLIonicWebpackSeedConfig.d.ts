declare interface IGLIonicWebpackSeedConfig {
    name?: string;
    debug?: boolean;
    appId?: string;
    version?: {
        major: number;
        minor: number;
        patch: number;
        preReleaseTag: string;
        preReleaseTagWithDash: string;
        preReleaseLabel: string;
        preReleaseNumber: number;
        buildMetaData: string;
        buildMetaDataPadded: string;
        fullBuildMetaData: string;
        majorMinorPatch: string;
        semVer: string;
        legacySemVer: string;
        legacySemVerPadded: string;
        assemblySemVer: string;
        fullSemVer: string;
        informationalVersion: string;
        branchName: string;
        sha: string;
        nuGetVersionV2: string;
        nuGetVersion: string;
        commitsSinceVersionSource: number;
        commitsSinceVersionSourcePadded: string;
        commitDate: string;
  }
}

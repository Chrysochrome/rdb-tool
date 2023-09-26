if (window.RDB_TOOLS_SWITCH) {
  import('./rdb-tool').then((packageIndex: any) => {
    const { RDBTool } = packageIndex;
    window.rdbTool = new RDBTool()
  })
}

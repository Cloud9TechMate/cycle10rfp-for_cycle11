SELECT TOP (1000) [COURT]
      ,[BUILDING]
      ,[ROOM]
      ,[HOURS]
      ,[PASS]
  FROM [dbo].[court]

SELECT TOP (1000) *
FROM [dbo].[court]

UPDATE dbo.court
SET ROOM = 'jdaniels@ge.com'
WHERE COURT = 'Joy Daniels'

UPDATE dbo.court
SET PASS = 'helloWorld#123'
WHERE COURT = 'Christian Guyton'

ALTER TABLE dbo.court
DROP COLUMN PASS

ALTER TABLE dbo.court
ADD PASS Varchar(20)
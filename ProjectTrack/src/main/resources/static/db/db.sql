USE protrack;

-- 创建 TrackUsers 表
CREATE TABLE IF NOT EXISTS TrackUsers (
                                          UID INT AUTO_INCREMENT PRIMARY KEY,
                                          Name VARCHAR(45),
    Email VARCHAR(45) UNIQUE,
    Role VARCHAR(45),
    Timezone VARCHAR(45),
    Password VARCHAR(255) -- 存储加密后的密码
    );

-- 创建 Projects 表
CREATE TABLE IF NOT EXISTS Projects (
    PID INT AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(45),
    TotalPoints INT,
    Outcomes VARCHAR(255),
    Earned VARCHAR(255),
    Description TEXT,
    MeetingTime VARCHAR(45),
    MeetingPlace VARCHAR(45)
    );

-- 创建 Deliverables 表
CREATE TABLE IF NOT EXISTS Deliverables (
                                            PID INT,
                                            UID INT,
                                            Item VARCHAR(45),
    Number FLOAT,
    Phase VARCHAR(45),
    Date DATETIME,
    Mode VARCHAR(45),
    Necessity VARCHAR(45),
    Assessment VARCHAR(45),
    Point INT,
    Weight INT,
    Comment TEXT,
    PRIMARY KEY (PID, Item),
    FOREIGN KEY (PID) REFERENCES Projects(PID),
    FOREIGN KEY (UID) REFERENCES TrackUsers(UID)
    );

-- 创建 Members 表
CREATE TABLE IF NOT EXISTS Members (
                                       PID INT,
                                       UID INT,
                                       Designation VARCHAR(45),
    PRIMARY KEY (PID, UID),
    FOREIGN KEY (PID) REFERENCES Projects(PID),
    FOREIGN KEY (UID) REFERENCES TrackUsers(UID)
    );

-- 创建 Requirements 表
CREATE TABLE IF NOT EXISTS Requirements (
                                            PID INT,
                                            Technology VARCHAR(45),
    Software VARCHAR(45),
    PRIMARY KEY (PID, Technology),
    FOREIGN KEY (PID) REFERENCES Projects(PID)
    );

-- 创建 Rubrics 表
CREATE TABLE IF NOT EXISTS Rubrics (
                                       PID INT,
                                       Category VARCHAR(45),
    Developing VARCHAR(255),
    Component VARCHAR(255),
    Accomplished VARCHAR(255),
    Perfect VARCHAR(255),
    PRIMARY KEY (PID, Category),
    FOREIGN KEY (PID) REFERENCES Projects(PID)
    );

<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="/">
        <xsl:result-document href="PR.html">
            <html>
                <head>
                    <title> Project Record </title>
                    <meta charset="UTF-8"></meta>
                    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
                </head>
                <body>
                    <h1>Project Record</h1>
                    <xsl:apply-templates></xsl:apply-templates>
                </body>
            </html>
        </xsl:result-document>
    </xsl:template>
    
    <xsl:template match="metadata">
        <table class="w3-table-all w3-hoverable">
            <tr>
                <th>KEY NAME: </th><td> <xsl:value-of select="keyname"/></td>
                <th>BEGIN DATE: </th><td> <xsl:value-of select="bdate"/></td>
            </tr>
            <tr>
                <th>TITLE: </th><td> <xsl:value-of select="title"/></td>
                <th>END DATE: </th><td> <xsl:value-of select="edate"/></td>
            </tr>
            <tr>
                <xsl:if test="subtitle">
                <th>SUBTITLE: </th><td> <xsl:value-of select="subtitle"/></td>
                </xsl:if>
                <th>SUPERVISOR: </th><td> <a href="{supervisor/@homepage}"><xsl:value-of select="supervisor"/></a></td>
            </tr>
        </table>
        <hr></hr>
    </xsl:template>
    
    <xsl:template match="workteam">
        <h2> WORKTEAM </h2>
        <ol class="w3-ul w3-card-4">
            <xsl:apply-templates></xsl:apply-templates>
        </ol>
    </xsl:template>

    <xsl:template match="worker">
        <li> <xsl:value-of select="identifier"/>  -- <xsl:value-of select="name"/> -- <xsl:value-of select="email"/> <xsl:if test="git"> -- <xsl:value-of select="git"/> </xsl:if></li>
    </xsl:template>
    
    <xsl:template match="abstract">
        
        <div class="w3-container">
            <h2> ABSTRACT</h2>
            <xsl:apply-templates></xsl:apply-templates>
        </div>
    </xsl:template>
    
    <xsl:template match="p">
        <p>
            <xsl:apply-templates></xsl:apply-templates>
        </p>
    </xsl:template>
    
    <xsl:template match="u">
        <u> <xsl:apply-templates></xsl:apply-templates></u>
    </xsl:template>

    <xsl:template match="b">
        <b> <xsl:apply-templates> </xsl:apply-templates></b>
    </xsl:template>
    
    <xsl:template match="i">
        <i> <xsl:apply-templates> </xsl:apply-templates> </i>
    </xsl:template>
    
    <xsl:template match="xref">
        <a href="{@url}"> <xsl:value-of select="xref"/> </a>
    </xsl:template>

    <xsl:template match="deliverables">
        <h2> DELIVERABLES</h2>
        <ul class="w3-ul w3-card-4">
            <xsl:apply-templates> </xsl:apply-templates>
        </ul>
    </xsl:template>
    
    <xsl:template match="deliverable">
       <li> <a href="{@path}"> <xsl:value-of select="."/> </a></li> 
    </xsl:template>


</xsl:stylesheet>